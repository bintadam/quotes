import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/user';
import { RepoService } from 'src/app/services/repo.service';
import { Repositories } from 'src/app/repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: Repositories[];
  constructor(public repoService: RepoService) { }

  fetchRepo(value: string) {
    this.repoService.fetchRepo(value).subscribe((data) => {
      this.repo = data;
      console.log(this.repo);
    });
  }

  ngOnInit(): void {
    this.fetchRepo('bintadam');
  }

}