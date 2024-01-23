import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';


Chart.register(...registerables);

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css'],
})
export class DoctordashboardComponent {
  patients: any[] = [];

  // Variables for charts
  ageChart: any;
  genderChart: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const apiUrl = 'http://localhost:3000/patient-data';

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.patients = data;

        // Create Age Distribution Chart
        this.ageChart = new Chart('ageChart', {
          type: 'bar',
          data: {
            labels: this.patients.map((patient) => patient.age),
            datasets: [
              {
                label: 'Age Distribution',
                data: this.patients.map((patient) => patient.age),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: { beginAtZero: true },
            },
          },
        });

        // Create Gender Distribution Chart
        const genderData = this.getGenderDistribution();
        this.genderChart = new Chart('genderChart', {
          type: 'pie',
          data: {
            labels: Object.keys(genderData),
            datasets: [
              {
                data: Object.values(genderData),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
              },
            ],
          },
        });
      },
      (error) => {
        console.error('Error fetching patient data:', error);
      }
    );

      
  }

  

  private getGenderDistribution(): { [gender: string]: number } {
    const genderCounts: { [gender: string]: number } = {};

    this.patients.forEach((patient) => {
      if (genderCounts[patient.gender]) {
        genderCounts[patient.gender]++;
      } else {
        genderCounts[patient.gender] = 1;
      }
    });

    return genderCounts;
  }

  private generateRandomProgressValues(): number[] {
    // Generate random progress values for demonstration purposes
    return this.patients.map(() => Math.floor(Math.random() * 100));
  }
}
