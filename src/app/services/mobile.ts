import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mobile {
  private isMobile = signal<boolean | undefined>(undefined);

  public isMobileDevice(): boolean {
    if(this.isMobile() === undefined) {
      const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i]
      this.isMobile.set(regexs.some((b) => navigator.userAgent.match(b)));
    }
    return !!this.isMobile();
  }
}
