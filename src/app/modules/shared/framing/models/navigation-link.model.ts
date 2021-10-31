export interface NavigationLink {
  label: string,
  description?: string,
  routerLink?: string | string[],
  iconName?: string,
  isExpanded?: boolean
  children?: NavigationLink[]
}
