import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _tabs!: NodeListOf<Element>;
  private _activedTab: string = "";
  private _oldContentId: string = "";

  ngOnInit (): void
  {
    this.refresh();
  }

  private init() {
    this._activedTab || (this._activedTab = "home-1",
    this.setActivedTab(this._activedTab)),
    this.setTabAriaSelected(this._activedTab, "true"),
    this.removeHiddenClass(document.getElementById(this._activedTab)?.dataset?.['tabTarget']!)
  }

  protected refresh(){
    this._tabs = document.querySelectorAll("[data-tab-target]");
    this._activedTab = this.getActivedTab() ?? "";

    this.init();
    
    this._tabs.forEach(e=>{
      e.addEventListener("click", () => {
        this._activedTab = this.getActivedTab() ?? "";
        if (this._activedTab === e.id){
          return;
        }
        this.setTabAriaSelected(this._activedTab, "false");
        this._oldContentId = document.getElementById(this._activedTab)?.dataset?.['tabTarget']!;

        this.addHiddenClass(this._oldContentId);
        this.setActivedTab(e.id);
        this.setTabAriaSelected(e.id, "true"),
        this.removeHiddenClass(e.id)
      })
    });
  }

  public getActivedTab() {
    return localStorage.getItem("activedTab")
  }

  public setActivedTab(e: string) {
    localStorage.setItem("activedTab", e)
  }

  public setTabAriaSelected(e: string, t: string) {
    document.getElementById(e)?.setAttribute("aria-selected", t)
  }

  public addHiddenClass(e: string) {
    document.getElementById(e)?.classList.add("md:hidden")
  }

  public removeHiddenClass(e: string) {
    document.getElementById(e)?.classList.remove("md:hidden")
  }
}
