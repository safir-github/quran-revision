import { Component, OnInit } from '@angular/core';
import { SourateService } from '../../services/sourate.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule], // Ajoute CommonModule ici
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sourates: any[] = [];

  constructor(private sourateService: SourateService) {}

  ngOnInit(): void {
    this.sourateService.getSourates().subscribe((data) => {
      this.sourates = data;
    });
  }
}
