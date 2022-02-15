import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepositoryService } from '../repository-service/repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  

  repo: Repo[] = [];

  constructor(public repoService: RepositoryService ) {} 
    
  fetchRepo(value:string){
    this.repoService.fetchRepo(value).subscribe((data) =>{
        this.repo = data;
        console.log (this.repo)
      });
    }
    
  ngOnInit(): void {
  }

}
