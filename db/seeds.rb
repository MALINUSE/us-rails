#######################################################  DATA COMMUN ###################################################

User.delete_all
User.create!([
                 {id: -1000, email: "imidsac@hotmail.fr" , password: "walilahilhamdou"},
                 {id: -1, email: "admin@admin.fr", password: "adminuser"},
                 ])
puts "===> Sample date have been set in DB  Users!"

####################################################### END DATA COMMUN ################################################

Subject.delete_all
Subject.create!([
                    {name: "Présentation", position: 1, visible: true},
                    {name: "Aide et Soutien", position: 2, visible: true}

                ])

puts "===> Sample date have been set in DB  Subjects!"

Page.delete_all
Page.create!([
                 {subject_id: 1, name: "Malinuse se présente", position: 1, visible: true},
                 {subject_id: 1, name: "Vision et Mission de Malinuse", position: 2, visible: true},
                 {subject_id: 1, name: "Mot du PDG", position: 3, visible: true},

                 {subject_id: 2, name: "Annuaire", position: 4, visible: true}

             ])

puts "===> Sample date have been set in DB  Pages!"

Section.delete_all
Section.create!([
                    {page_id: 1, name: "Malinuse se présente Section 1", position: 1, visible: true, content_type: "text", content: "Malinuse se présente Section 1"},
                    {page_id: 1, name: "Malinuse se présente Section 2", position: 2, visible: true, content_type: "text", content: "Malinuse se présente Section 2"},
                    {page_id: 1, name: "Malinuse se présente Section 3", position: 3, visible: true, content_type: "text", content: "Malinuse se présente Section 3"},

                    {page_id: 2, name: "Vision et Mission de Malinuse section 1", position: 4, visible: true, content_type: "text", content: "Vision et Mission de Malinuse section 1"},
                    {page_id: 2, name: "Vision et Mission de Malinuse section 2", position: 5, visible: true, content_type: "text", content: "Vision et Mission de Malinuse section 2"}

                ])

puts "===> Sample date have been set in DB  Sections!"