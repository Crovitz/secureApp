import { Component, OnInit } from '@angular/core';
import { Sample } from '../sample';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  sample: Sample;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.getSample();
  }

  getSample(): void {
    this.indexService.getSample()
      .subscribe(sample => this.sample = sample)
  }
}
