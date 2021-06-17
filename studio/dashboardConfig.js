export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cb8b907bf01e00dffbac90',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1wraohp8',
                  apiId: 'db65e961-c314-4b26-9a69-c627d6f52027'
                },
                {
                  buildHookId: '60cb8b903d0e61057c02a23a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-viwbab49',
                  apiId: 'ab0c4398-188a-4996-9857-c05a849d69e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericganderson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-viwbab49.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
