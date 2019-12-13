import { Component, State, h, Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'announcement-bar',
  styleUrl: 'announcement-bar.css'
})
export class AnnouncementBar {
  @State() isModalOpen: boolean = false;
  @Event() toggleModal!: EventEmitter;

  render() {
    return ([
      <stencil-route-link url="/blog/stencil-roadmap-fall-2019" class="announcement">
        <a href="" class="Banner__Wrapper-sc-4stcci-0 jJmRoA"><div class="container "><strong>Peace of mind, delivered by SendSecure.</strong><strong class="cta">Coming soon ›</strong></div></a>
      </stencil-route-link>
    ])
  }
}