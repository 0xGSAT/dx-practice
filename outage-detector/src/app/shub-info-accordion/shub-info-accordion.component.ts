import { Component, OnInit } from '@angular/core';
import { OutageDataService } from 'src/services/outage-data.service';

@Component({
  selector: 'app-shub-info-accordion',
  templateUrl: './shub-info-accordion.component.html',
  styleUrls: ['./shub-info-accordion.component.scss']
})
export class ShubInfoAccordionComponent implements OnInit {
  collapsedSections: string[] = [];
  data: any;

  constructor(private outageDataService: OutageDataService) { }

  ngOnInit(): void {
    this.loadData();
    console.log("Loaded");
  }

  loadData(): void {
    this.outageDataService.getOutageList().subscribe(
      (response: any) => {
        this.data = response;
        console.log(this.data);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  toggleCollapse(section: string) {
    if (this.isCollapsed(section)) {
      this.collapsedSections = this.collapsedSections.filter(s => s !== section);
    } else {
      this.collapsedSections.push(section);
    }
  }

  isCollapsed(section: string): boolean {
    return this.collapsedSections.includes(section);
  }

}
