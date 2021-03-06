import { Component } from '@angular/core';
import {Response} from '@angular/http';
import {ServerService} from './server.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService){}
  onStoreServer(){
    this.serverService.storeServer(this.servers)
    .subscribe(
      (response)=>{console.log(response)},
      (error) =>{console.log(error)}
    )
  }
  getServers(){
    this.serverService.getServer()
    .subscribe(
      (response: Response)=>{
        const data = response.json();
        console.log(data);
      },
      (error) =>{console.log(error)}
    )
  }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
