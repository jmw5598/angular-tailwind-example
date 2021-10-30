import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';

import { DialogRef } from '../models/dialog-ref.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  public open<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data: T): MyOverlayRef<R> {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background'
    });

    const overlayRef = this.overlay.create(configs);

    const myOverlayRef = new DialogRef<R, T>(overlayRef, content, data);

    // const injector = this.createInjector(myOverlayRef, this.injector);
    const injector = Injector.create(myOverlayRef, this.injector);
    overlayRef.attach(new ComponentPortal(OverlayComponent, null, injector));

    return myOverlayRef;
  }

  public createInjector(ref: DialogRef, inj: Injector) {
    const injectorTokens = new WeakMap([[DialogRef, ref]]);
    return Injector.create(injectorTokens);
  }
}
