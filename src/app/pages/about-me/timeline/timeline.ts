import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ITimelineItem, TimelineItem } from './timeline-item/timeline-item';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Mobile } from '../../../services/mobile';

// { date: '', title: '', description: '' },
const ALL_TIMELINE_DATA: ITimelineItem[] = [
  { date: "1996", title: 'Birth', description: "I am born!" },
  { date: "August 2011", title: 'First Class', description: "Took my first programming class in middle school and discovered I loved coding." },
  { date: "June 2015", title: 'Graduated Highschool', description: "Left on a service trip and was excited to start my programming journey." },
  { date: "August 2017", title: 'UVU', description: "Started college in the Computer Science program and learned to hate programming." },
  { date: "August 2017", title: 'Text Adventure', description: "Created my first video game following a tutorial." },
  { date: "October 2017", title: 'BreakOut VS', description: "Made the second iteration of my BreakOut game." },
  { date: "March 2018", title: 'BreakOut 2.0', description: "My third iteration of BreakOut, made for my dad." },
  { date: "January 2018", title: 'Boostability', description: "My first web job, building hundreds of static WordPress sites for clients." },
  { date: "June 2018", title: 'QA', description: "Started a QA role at DentalIntelligence to build their QA processes from scratch." },
  { date: "January 2019", title: 'Jr Dev', description: "Got my first development job at DentalIntelligence and realized I love programming." },
  { date: "October 2020", title: 'GlitchWar', description: "Released my first game on Steam!" },
  { date: "August 2020", title: 'Kickstarter', description: "GlitchWar was successfully funded by incredible and supportive people." },
  { date: "February 2021", title: 'XenonChex', description: "Joined a startup as their only full-time Angular developer, building the main product." },
  { date: "May 2022", title: 'Froge', description: "Competed in a 3-day game jam and built a mini 2D platformer." },
  { date: "January 2023", title: 'DHI', description: "Started a new job as a senior frontend developer at DHI Computing." },
  { date: "September 2023", title: 'Ghostie', description: "Finished a gamejam Metroidvania game." },
  { date: "August 2023", title: 'Sinta\'s Clayworks', description: "Built an e-commerce site for my spouse's new business." },
  { date: "October 2023", title: 'Team Lead', description: "Became development team lead on the company’s flagship project." },
  { date: "June 2024", title: 'ToolPouch', description: "Created a Stardew Valley mod that gained a lot of support." },
  { date: "September 2025", title: 'Flagship Released', description: "The project I’ve been leading is now in production for many clients." },
  { date: "November 2025", title: 'Portfolio', description: "Built this portfolio to practice Angular and push my skills further." }
];


@Component({
  selector: 'app-timeline',
  imports: [MatIconModule, TimelineItem, MatCardModule, MatButtonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {

  public timelineData: ITimelineItem[] = [];
  public isMobile: boolean = false;

  get timelineChunks(): ITimelineItem[][] {
    let rowItems = 3;
    if(this.mobileService.isMobileDevice()) {
      rowItems = 1;
    }
    const chunks = [];
    for (let i = 1; i < this.timelineData.length; i += rowItems) {
      chunks.push(this.timelineData.slice(i, i + rowItems));
    }
    return chunks;
  }

  constructor(private mobileService: Mobile) {
    this.sortTimeline()
    this.isMobile = mobileService.isMobileDevice();
  }

  private sortTimeline(): void {
    let sortedAndPreppedList: ITimelineItem[] = [];
    const sortedByDate = ALL_TIMELINE_DATA.sort((a, b) => this.parseMonthYear(b.date).getTime() - this.parseMonthYear(a.date).getTime());
    if(this.mobileService.isMobileDevice()) {
      this.timelineData = sortedByDate;
      return;
    }
    // Reverse every other row for timeline
    sortedAndPreppedList.push(...sortedByDate.slice(0, 4));
    const remaining = sortedByDate.slice(4);
    for (let i = 0; i < remaining.length; i += 3) {
    const chunk = remaining.slice(i, i + 3);
    if ((Math.floor(i / 3)) % 2 === 0) {
      sortedAndPreppedList.push(...chunk.reverse());
    } else {
      sortedAndPreppedList.push(...chunk);
    }
  }

    this.timelineData = sortedAndPreppedList;
  }

  private parseMonthYear(dateStr: string): Date {
    return new Date(dateStr + ' 1');
  }

}

