const project = {
    name: "project",
    type: "document",
    title: "Projects",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name"
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {source: 'name'}
      },
      {
        name: 'images',
        title: 'Project images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true},
            fields: [ 
              {
                name:'alt',
                title: 'Alt', 
                type: 'string'
              }
            ]
          },
        ],
        description: 'Multiple images for the project',
      },
      {
        name: "description",
        type: "text",
        title: "Description"
      },
      {
        name: "details",
        type: "object",
        title: "Details",
        fields: [
          {
            name: "status",
            type: "string",
            title: "Status"
          },
          {
            name: "location",
            type: "string",
            title: "Location"
          },
          {
            name: "teamMembers",
            type: "array",
            title: "Team Members",
            of: [
              {
                type: "string"
              }
            ]
          },
          {
            name: "budget",
            type: "number",
            title: "Budget"
          }
        ]
      }
    ]
  };

  export default project