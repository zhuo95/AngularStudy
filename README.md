# Angular Study

## Databinding
### 1. String Interpolation ( {{ data }} )

```
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
}

...

<p>Server with ID {{serverId}} is {{serverStatus}} </p>

```
### 2. Property Binding ( [property]="data" )

让[disabled] = allowNewServer，两秒后disableed设置为false,是对property的设置
```
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}

...

<button class="btn btn-primary" [disabled]="!allowNewServer">NewServer</button>

```

### 3. Event Binding ( (event)="expression" )
```
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onChangeServer() {
    this.serverStatus = 'online';
  }
  
  ...
  
  <button class="btn btn-primary" (click)="onChangeServer()" )>NewServer</button>

}

```
#### $ (dollar sign) 
```
onUpdateServerId(event: Event) {
    this.serverId = (<HTMLInputElement>event.target).value;
  }
  ...
  <input type="text" (input)="onUpdateServerId($event)">
  <p>{{ serverId }}</p>
```


### 4. Combination of Both: Two-Way-Binding ( [(ngModel)]="data" )
two way binding 是一边改变另一边也会变
```
<input type="text" (input)="onUpdateServerId($event)">
//two way binding
<input type="text" [(ngModel)]="serverId">
```
## Directives
### Directives are instructions in the DOM
#### ngif
```
serverShow = false;
 onChangeServer() {
    this.serverShow = true;
    this.serverStatus = 'server is ' + this.serverId;
  }
  ...
<p *ngIf="serverShow">{{ serverStatus}}</p>

```
