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
#### enhance  ngif with else condition
```
<p *ngIf="serverShow;else noShow">{{ serverStatus}}</p>

<ng-template #noShow>
  <p>No Server</p>
</ng-template>
```
#### ngStyle
```
<p [ngStyle]="{ backgroundColor: 'red' }" >Hello</p>
```

#### ngClass
[ngClass] = "{ 'className' : function(true or false) }"
```
<p [ngClass]="{ 'online': true }">World</p>
```
#### ngFor
for 循环 servers 数组，for循环几次就创建几个paragraph
```
<p *ngFor="let server of servers" >New</p>
```
let作用:
```
<p *ngFor="let server of servers;let i = index">{{ i }}</p>

<p *ngFor="let server of servers;let i = index">{{ server }}</p>
```

#### view encapsulation
css 文件只是对当前component的style 有效

