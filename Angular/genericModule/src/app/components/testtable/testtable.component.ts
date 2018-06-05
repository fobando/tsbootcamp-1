import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';

import { LoginService } from '../../services/login.service';
import { TestUsers } from '../../models/testtable.interface';

@Component({
  selector: 'app-testtable',
  templateUrl: './testtable.component.html',
  styleUrls: ['./testtable.component.css']
})
export class TesttableComponent implements OnInit {

  dataSource = new UserDataSource(this.loginService);
  displayedColumns = ['id', 'firstName', 'lastName'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public loginService: LoginService ) { }

  ngOnInit() {
 
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private loginService: LoginService) {
    super();
  }
   connect(): Observable<TestUsers[]> {
     return this.loginService.getMockData();
  }
  disconnect() {}
}
