import { Component, OnInit } from '@angular/core'
import { RepositoryService } from '../repository-service/repository.service';
import { Repositories } from './repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  
  repo: Repositories[];
  constructor(public repoService: RepositoryService) { }

  fetchRepo(value: string) {
    this.repoService.fetchRepo(value).subscribe((data) => {
      this.repo = data;
      console.log(this.repo);
    });
  }
  
  ngOnInit(): void {
    this.fetchRepo('Bintadam');
  }

}
