import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-view-user',
  imports: [ReusableComponent],
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {

  parentProperty: string = 'View User : Kindly read the user details';
  constructor(
    private crud: CrudService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  userData: any;
  userId!: {
    uid: number;
  };

  ngOnInit() {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    };
    console.log(this.userId.uid);
    this.crud.getDataById(this.userId.uid).subscribe((res) => {
      this.userData = res;
    });
  }

  onClose() {
    this.router.navigateByUrl('crud');
  }
}
