import { NavigationLink } from './modules/shared/framing';

const dashboardLinks: NavigationLink = {
  label: 'Dashboard',
  isExpanded: false,
  children: [
    {
      label: 'Overview',
      description: 'Get a better understanding of where your traffic is coming from.',
      routerLink: '',
      iconName: 'hero-chart-bar'
    },
    {
      label: 'Calendar',
      description: 'Company events, blah, stuff.',
      routerLink: '',
      iconName: 'hero-calendar'
    },
    {
      label: 'Notification',
      description: 'Your notfications; Lorem ipsum dolor sit amet consectetur adipi.',
      routerLink: '',
      iconName: 'hero-bell'
    },
    {
      label: 'Open Jobs',
      description: 'Current open jobs, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem rerum repellendus incidunt vitae.',
      routerLink: '',
      iconName: 'hero-chart-bar'
    },
    {
      label: 'Profile',
      description: 'Modify and change your profile details. Lorem ipsum.',
      routerLink: '',
      iconName: 'hero-user'
    }
  ]
}

const salesLinks: NavigationLink = {
  label: 'Sales',
  isExpanded: false,
  children: []
}

const purchasingLinks: NavigationLink = {
  label: 'Purchasing',
  isExpanded: false,
  children: []
}

const facilityLinks: NavigationLink = {
  label: 'Facility',
  isExpanded: false,
  children: []
}

const workflowLinks: NavigationLink = {
  label: 'Workflow',
  isExpanded: false,
  children: []
}

const serviceLinks: NavigationLink = {
  label: 'Service',
  isExpanded: false,
  children: []
}

const accountingLinks: NavigationLink = {
  label: 'Accounting',
  isExpanded: false,
  children: []
}

const accountLinks: NavigationLink = {
  label: 'Account',
  isExpanded: false,
  children: []
}

export const DEFAULT_NAVIGATION_LINKS: NavigationLink[] = [
  dashboardLinks,
  salesLinks,
  purchasingLinks,
  facilityLinks,
  workflowLinks,
  serviceLinks,
  accountingLinks,
  accountLinks
];