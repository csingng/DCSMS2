import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    role = '';
    constructor(private route: ActivatedRoute, private router: Router, public appState: AppState) {
        this.route.params.subscribe(res => {
            console.log('[MenuComponent]   params:', res);
          }
        );
    }

      setContentHeight() {
          console.log('[MenuComponent.setContentHeight]...STARTED');
          // reset height
          $('.right_col').css('min-height', $(window).height());

          var bodyHeight = $('body').outerHeight(),
          footerHeight = $('body').hasClass('footer_fixed') ? -10 : $('footer').height(),
          leftColHeight = $('.left_col').eq(1).height(),
          contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

          // normalize content
          contentHeight -= $('.nav_menu').height() + footerHeight;
          console.log('[MenuComponent.setContentHeight]...bodyHeight', bodyHeight);
          $('.right_col').css('min-height', bodyHeight);
      }

      anchorClicked(event: MouseEvent) {
          var _this = this;
          console.log('[MenuComponent.anchorClicked]    this.appState:', this.appState);
          console.log('[MenuComponent.anchorClicked]', event);
            this.role = this.appState.get().role;

          //var $li = $(this).parent();
          var target = event.srcElement.id;
          var $li = $('#' + target.replace("chevron","li")).parent();
          console.log('[MenuComponent.anchorClicked]    parent', $li);

          if ($li.is('.active')) {
              $li.removeClass('active active-sm');
              $('ul:first', $li).slideUp(function() {
                  //_this.setContentHeight();
              });
          } else {
              // prevent closing menu if we are on child menu
              if (!$li.parent().is('.child_menu')) {
                  $('#sidebar-menu').find('li').removeClass('active active-sm');
                  $('#sidebar-menu').find('li ul').slideUp();
              }

              $li.addClass('active');

              $('ul:first', $li).slideDown(function() {
                  //_this.setContentHeight();
              });
          }
      }

      toggleClicked(event: MouseEvent)
      {
          var _this = this;
          console.log('[TopNavComponent.toggleClicked]', event);

          var target = event.srcElement.id;

          // toggle small or large menu
          if ($('body').hasClass('nav-md')) {
              $('#sidebar-menu').find('li.active ul').hide();
              $('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
          } else {
              $('#sidebar-menu').find('li.active-sm ul').show();
              $('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
          }
          $('body').toggleClass('nav-md nav-sm');
      }

      ngOnInit() {
        console.log('[MenuComponent]  ngOnInit...');
      }
}
