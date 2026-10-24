import { Component, AfterViewInit } from '@angular/core';


@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit(){
    // Add active state to sidebar nav links
    document.querySelectorAll<HTMLAnchorElement>('#layoutSidenav_nav .sb-sidenav a.nav-link').forEach(a => {
      if (a.href === window.location.href) { a.classList.add('active'); }
    });

    // Toggle the side navigation
    document.getElementById('sidebarToggle')?.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
    });
  }
}
