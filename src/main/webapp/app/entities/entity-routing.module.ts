import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'portfolio',
        data: { pageTitle: 'Portfolios' },
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
      },
      {
        path: 'mf',
        data: { pageTitle: 'MFS' },
        loadChildren: () => import('./mf/mf.module').then(m => m.MFModule),
      },
      {
        path: 'shares',
        data: { pageTitle: 'Shares' },
        loadChildren: () => import('./shares/shares.module').then(m => m.SharesModule),
      },
      {
        path: 'mutual-fund',
        data: { pageTitle: 'MutualFunds' },
        loadChildren: () => import('./mutual-fund/mutual-fund.module').then(m => m.MutualFundModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
