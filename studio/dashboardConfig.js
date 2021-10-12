export default {
  widgets: [
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
                  buildHookId: '6165288ff6388e97d1ccd5b6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ggxja2zj',
                  apiId: '44a854e1-39ca-40c3-948f-bd5b3137647e'
                },
                {
                  buildHookId: '6165288ffbdaa296521f537f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k8nkeb4t',
                  apiId: '566675d1-65bc-40e6-900e-d36d05423089'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isewat/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k8nkeb4t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
