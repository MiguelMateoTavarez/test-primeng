import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterOutlet } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { AppSidebarComponent } from "../../components/app-sidebar/app-sidebar.component";

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet,
    MenubarModule,
    DrawerModule,
    DrawerModule,
    ButtonModule,
    AvatarModule,
    AppSidebarComponent
],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;
  menuItems: MenuItem[] = [
    {
      icon: 'pi-file-edit',
      label: 'Form',
      url: 'forms',
    },
    {
      icon: 'pi-table',
      label: 'Table',
      url: 'tables',
    },
  ];
}
