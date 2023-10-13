import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  animation(navbar:HTMLElement): void{
    window.scrollY > 30 ? navbar.classList.remove('py-4') : navbar.classList.add('py-4')
  }

}

