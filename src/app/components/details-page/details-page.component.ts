import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IDetails } from './details.interface';
import { Subject, takeUntil } from 'rxjs';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  constructor(private detailService: DetailsService) {}

  details$!: IDetails[];

  private destroy = new Subject();

  ngOnInit(): void {
    this.detailService
      .getData()
      .pipe(takeUntil(this.destroy))
      .subscribe((data) => {
        this.details$ = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
