import {Injectable} from '@angular/core';
import * as uuid from 'uuid';
import {Document, Status} from '../models/document';
import {DocumentLog} from '../models/document-log';
import {User} from "../models/user";
import {AuthService} from '../core/services/auth.service';
import {Observable, Subject} from "rxjs";
import {Release} from '../models/release';
import * as _ from 'lodash';

@Injectable()
export class DocumentService {

  protected documents: Document[] = [];
  protected documents$ = new Subject<Document[]>();
  protected documentLogs$ = new Subject<DocumentLog[]>();
  protected documentLogs: Array<DocumentLog> = [];
  protected documentReleases: Array<Release> = [];

  //this variable allow to handel what documents
  // we want to show in main components
  protected currentDocumentStatus: number;

  constructor(private auth: AuthService) {
    this.onInit();
  }

  onInit() {
    let documents = JSON.parse(localStorage.getItem('documents'));
    if (documents) {
      this.documents = documents;
    }
    let tags = JSON.parse(localStorage.getItem('tags'));
    if (!tags) {
      tags = [{
        id: uuid.v4(),
        text: 'Tender'
      }];
      localStorage.setItem('tags', JSON.stringify(tags));
    }
    let documentLogs = JSON.parse(localStorage.getItem('document-logs'));
    if (documentLogs) {
      this.documentLogs = documentLogs;
    }
    let documentReleases = JSON.parse(localStorage.getItem('document-releases'));
    if (documentReleases) {
      this.documentReleases = documentReleases;
    }
  }

  private syncStore() {
    localStorage.setItem('documents', JSON.stringify(this.documents));
    this.documents$.next(this.documents);
  }

  createDoc(doc: Document) {
    this.documents.push(doc);
    this.syncStore();
  }

  updateDoc(doc: Document, changes: DocumentLog) {
    let p = _.findIndex(this.documents, {'id': doc.id});
    if (p >= 0) {
      this.documents[p] = doc;
    }
    this.createDocumentLog(changes);
    this.syncStore();
    return doc;
  }

  changeDocumentStatus(status: string, documentID: string) {
    let document = this.findById(documentID);
    let pos = this.documents.indexOf(document);
    document.status = status;
    if (pos != -1) {
      this.documents.splice(pos, 1);
    }
    const documentLog: DocumentLog = {
      id: uuid.v4(),
      user: this.auth.getUser(),
      document: document,
      changes: 'Document change to ' + status,
      date: Date.now()
    };
    this.createDocumentLog(documentLog);
    this.createDoc(document);
  }

  removeDocument(documentID: string) {
    let document = this.findById(documentID);
    let pos = this.documents.indexOf(document);
    if (pos != -1) {
      this.documents.splice(pos, 1);
    }
    this.syncStore();
    return this.documents;
  }

  createDocumentLog(documentLog: DocumentLog) {
    this.documentLogs.push(documentLog);
    localStorage.setItem('document-logs', JSON.stringify(this.documentLogs));
    this.documentLogs$.next(this.documentLogs);
  }

  findById(id): Document {
    return this.documents.find((doc) => doc.id === id);
  }

  findDocumentLogById(id): Array<DocumentLog> {
    return this.documentLogs.filter((doc) => doc.document.id === id);
  }

  findAll(): Array<Document> {
    return this.documents;
  }

  createDocumentRelease(documentID: string) {
    let document = this.findById(documentID);
    const documentRelease: Release = {
      id: uuid.v4(),
      document: document,
      version: document.version,
      date: Date.now()
    };
    this.documentReleases.push(documentRelease);
    localStorage.setItem('document-releases', JSON.stringify(this.documentReleases))
  }

  findDocumentReleaseById(id): Array<Release> {
    return this.documentReleases.filter((doc) => doc.document.id === id);
  }

  /**
   *
   * @returns {Observable<T>}
   */
  getDocuments(): Observable<Document[]> {
    return this.documents$.asObservable();
  }

  getDocumentLogs(): Observable<DocumentLog[]> {
    return this.documentLogs$.asObservable();
  }

  /**
   * Return where document is a primary responsibilities for the user
   * @param document
   * @param user
   * @returns {boolean}
   */
  isPrimaryResponsability(document: Document, user: User): boolean {
    return (_.isArray(document.primary))
      ? document.primary.findIndex((rank) => rank.id === user.rank.id) != -1
      : false;
  }

  /**
   * Return true or false if current user is the owner
   * @param document
   * @param user
   * @returns {boolean}
   */
  isOwner(document: Document, user: User): boolean {
    return document.owner.username === user.username
  }

  /**
   * Tell weather an user is member or not  from the document
   * @param document
   * @param user
   * @returns {boolean}
   */
  isMember(document: Document, user: User): boolean {
    return document.users.findIndex((x) => x.username === user.username) != -1;
  }

  /**
   * Return true weather current document has a search tag, otherwise false
   * @param document
   * @param tag
   * @returns {boolean}
   */
  hasTag(document: Document, tag: string): boolean {
    const tags = _.get(document, 'tags', []);
    return (_.isArray(tags))
      ? tags.findIndex((itemTag) => itemTag === tag) != -1
      : false;
  }

  /**
   * Get documents by his status
   * @param status
   * @returns {Document[]}
   */
  getDocumentsByStatus(status: Status): Document[] {
    if (status === -1)
      return this.documents;
    return this.documents.filter((doc) => doc.status === Status[status]);
  }

  /**
   * get document with Draft status
   * @returns {Document[]}
   */
  getDraftDocuments(): Document[] {
    return this.getDocumentsByStatus(Status.Draft);
  }


  /**
   * get document with Pending_Approval status
   * @returns {Document[]}
   */
  getPending_ApprovalDocuments(): Document[] {
    return this.getDocumentsByStatus(Status.Pending_Approval);
  }

  /**
   * get document with Approved status
   * @returns {Document[]}
   */
  getApprovedDocuments(): Document[] {
    return this.getDocumentsByStatus(Status.Approved);
  }

  /**
   * get document with Pending_Approval status
   * @returns {Document[]}
   */
  getPublishedDocuments(): Document[] {
    return this.getDocumentsByStatus(Status.Published);
  }

  /**
   * get document with Pending_Approval status
   * @returns {Document[]}
   */
  getPermanentDocuments(): Document[] {
    return this.getDocumentsByStatus(Status.Permanent);
  }

  /**
   * Any audit findings that are assigned to the Executive Housekeeper will show up here.
   */
  getMyAudits(user: User) {
    return this.documents.filter((doc) => this.isMember(doc, user));
  }

  // Any Non-Conformances raised by the Executive Housekeeper.
  getMyNonComformanced() {

  }

  /**
   * Regulation that has been updated since your last visit
   */
  getUpadatedRegulation(user: User): Document[] {
    return this.documents; //.filter((doc) => (this.isMember(doc, user) || this.isOwner(doc, user)) && (doc.updated.getTime() > user.last_visit.getTime()));
  }


  /**
   * Regulations that are tagged to the Executive Housekeeper.
   * These are policies to be implanted by the Executive Housekeeper. (Primary Owner)
   * @param user
   * @returns {Document[]}
   */
  getMyPrimaryResponsabilities(user: User): Document[] {
    /**
     * Check page 15 .ppt
     * Primary and Secondary Responsibilities
     * Each regulation will be tagged with a rank in Primary and Secondary Responsibilities.
     * Each regulation can have multiple primary or secondary tags.
     * This will allow for the rank specific regulations to show on the users dashboard.
     */
    return this.documents.filter((doc) => this.isPrimaryResponsability(doc, user));
  }

  /**
   *  Additional Regulations for my Department are requirements that are delegated by the Executive Housekeeper
   *  to other members of his/her department.  This will allow for clear oversight of responsibilities.
   * @param user
   * @returns {Document[]}
   */
  getMyAditionalRegulation(user: User): Document[] {
    return this.documents.filter((doc) => this.isMember(doc, user) || this.isOwner(doc, user));
  }

  /*
   Company Policies and General Regulations for all Ships Company is a standard set of regulations
   that all users will see regardless of sign-on rank.  These will cover items such as Anti-Trust Policy,
   Language Policy, Prohibited Items onboard, dangerous sports ashore, etc...
   */
  getCompanyPolicies() {
    // dudas
  }

  getGeneralRegulation() {
    // dudas
  }

  /**
   * Return an array of tags
   */
  getTags(): any {
    let allTags = [];
    let result = {};

    //get all tags
    for (let i = 0; i < this.documents.length; i++) {
      const tags = _.get(this.documents[i], 'tags', []);
      if (_.isArray(tags))
        allTags.push(...tags);
    }

    // Mechanism to get group tags using dictionaries
    for (let i = 0; i < allTags.length; i++) {
      const tag = allTags[i];

      //if tags exist
      if (result[tag])
        result[tag]['count'] += 1;
      else
        result[tag] = {count: 1};
    }

    return result;
  }

  getDocumentsByTag(tag: string): Document[] {
    return this.documents.filter((doc) => this.hasTag(doc, tag));
  }
}
