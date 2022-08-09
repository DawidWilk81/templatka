import { Component, OnInit } from '@angular/core';
import { faStar, faCaretUp, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-unlogged',
  templateUrl: './unlogged.component.html',
  styleUrls: ['./unlogged.component.scss']
})
export class UnloggedComponent implements OnInit {
  faStar = faStar;
  cart = faCartArrowDown

  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
