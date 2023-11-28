import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'chart.js/auto';
import { Chart, LinearScale, CategoryScale } from 'chart.js';
import { ServiceChambreService } from 'src/app/service-chambre.service';
import { ChambreTypeStatistics } from 'src/app/Models/ChambreTypeStatistics';
@Component({
  selector: 'app-details-chambre',
  templateUrl: './details-chambre.component.html',
  styleUrls: ['./details-chambre.component.css']
})
export class DetailsChambreComponent implements OnInit {
  title = 'chartDemo';
  chambreTypeStatistics: ChambreTypeStatistics[] = [];
  mostCommonTypeImage: string = ''; // Image URL for the most common type


  constructor(
    private route: ActivatedRoute,
    private chambreserivce: ServiceChambreService
  ) {}

  ngOnInit(): void {
    this.getChambreTypeStatistics();
  }

  private getChambreTypeStatistics(): void {
    this.chambreserivce.getChambreTypeStatistics().subscribe((data) => {
      this.chambreTypeStatistics = data;
      this.createChart();
      this.determineMostCommonTypeImage();

    });
  }

  private createChart(): void {
    Chart.register(LinearScale, CategoryScale);

    const labels = this.chambreTypeStatistics.map((stat) => stat.type);
    const datasetData = this.chambreTypeStatistics.map((stat) => stat.count);
    const backgroundColors = this.generateColors(this.chambreTypeStatistics.length);

    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Count',
            data: datasetData,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private generateColors(count: number): string[] {
    const colors: string[] = [];

    for (let i = 0; i < count; i++) {
      colors.push(this.getRandomColor());
    }

    return colors;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  
  private determineMostCommonType(chambreTypeStatistics: ChambreTypeStatistics[]): string {
    const sortedStatistics = chambreTypeStatistics.sort((a, b) => b.count - a.count);
    const mostCommonType = sortedStatistics[0];
    return mostCommonType.type;
  }

  private determineMostCommonTypeImage(): void {
    const mostCommonType = this.determineMostCommonType(this.chambreTypeStatistics);

    // Set the image URL based on the most common type
    switch (mostCommonType) {
      case 'SIMPLE':
        this.mostCommonTypeImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAYFCRbTF4JZBSGiIAVqgO4BgdJZMKG-VzA&usqp=CAU';
        break;
      case 'DOUBLE':
        this.mostCommonTypeImage = 'https://dinavia.fr/cdn/shop/articles/idee-deco-chambre-enfants-petite.jpg?v=1669214712';
        break;
      case 'TRIPLE':
        this.mostCommonTypeImage = 'https://www.deco.fr/sites/default/files/styles/width_880/public/migration-images/21269.jpg?itok=urPf6r2M';
        break;
      // Add more cases as needed
      default:
        this.mostCommonTypeImage = 'default_image_url';
        break;
    }
  }
}
