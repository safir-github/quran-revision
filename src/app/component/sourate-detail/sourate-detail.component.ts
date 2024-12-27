import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SourateService } from '../../services/sourate.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sourate-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sourate-detail.component.html',
  styleUrls: ['./sourate-detail.component.scss'],
})
export class SourateDetailComponent implements OnInit {
  sourate: any;

  constructor(
    private route: ActivatedRoute,
    private sourateService: SourateService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sourateService.getSourateById(id).subscribe((data) => {
      this.sourate = data;
    });
  }
}
