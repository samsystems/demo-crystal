import {
  Component,
  OnInit
} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {NgForm} from '@angular/forms';
import {DatabaseService} from '../../../core/services/database.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: ''});

  tags$: any;

  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  constructor(private db: DatabaseService) {
  }

  private async getTags() {
    const db = await this.db.get();
    return db['tags'].query().$
      .subscribe(heroes => {
        console.log(heroes);
      });
    ;
  }

  ngOnInit() {
    this.getTags();
  }

  createDoc(form: NgForm) {

  }
}
