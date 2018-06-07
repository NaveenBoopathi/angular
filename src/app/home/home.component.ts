import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventData = [
    {
      title: 'DEVintersection',
      description:
        'DEVintersection is an annual conference led by top Microsoft experts as they dive deep into new software developments and the intersection of technology.',
      startDate: '3rd Dec 2018',
      endDate: '',
      externalLink: 'https://www.devintersection.com/#!/',
      imageURL:
        'url("../../assets/panel/2000x1000-Conference-2016-1500x750.jpg")',
      tags: ['DevOps']
    },
    {
      title: 'OSCON',
      description:
        'OSCON (Open Source Convention) is an annual event that brings together engineers, developers, and business leaders to transform the practice of software development and revolutionize the next wave of innovation.',
      startDate: '18th July 2018',
      endDate: '',
      externalLink: 'https://conferences.oreilly.com/oscon/oscon-or',
      imageURL:
        'url("../../assets/panel/5_Things_to_Suggest_at_Your_Next_Conference_SOURCE_pixabay.jpg")',
      tags: ['Machine Learning']
    },
    {
      title: 'Microsoft Ignite',
      description:
        'The Microsoft Ignite conference is Microsoft’s annual meeting specifically designed for enterprise professionals, services, and products.',
      startDate: '24th Sep 2018',
      endDate: '',
      externalLink: 'https://www.microsoft.com/en-us/ignite/default.aspx',
      imageURL:
        'url("../../assets/panel/london_workplace_conference_2015.jpg")',
      tags: ['Dynamics CRM']
    },
    {
      title: 'JavaOne',
      description:
        'Organized by Oracle, JavaOne is typically recognized as the largest conference for Java developers, with learning tracks covering subjects like Java and security; Java, DevOps and the cloud, and Java and the IoT.',
      startDate: '28th Oct 2018',
      endDate: '',
      externalLink: 'https://www.devintersection.com/#!/',
      imageURL: 'url("../../assets/panel/Cisco-Wallpapers-19aug.jpg")',
      tags: ['Java']
    },
    {
      title: 'Apple WWDC',
      description:
        'The Apple Worldwide Developers Conference is Apple’s largest event for developers that dominates the tech scene and grabs the attention of press, industry experts, customers, and MacOS and iOS developers.',
      startDate: '14th June 2018',
      endDate: '',
      externalLink: 'https://developer.apple.com/wwdc/',
      imageURL: 'url("../../assets/panel/02-splash.jpg")',
      tags: ['Big Data']
    }
  ];
  constructor() {}

  ngOnInit() {}
}
