#######################################################  DATA COMMUN ###################################################

User.delete_all
User.create!([
                 {id: -1000, email: "imidsac@hotmail.fr" , password: "walilahilhamdou"},
                 {id: -1, email: "admin@admin.fr", password: "adminuser"},
                 ])
puts "===> Sample date have been set in DB  Users!"

####################################################### END DATA COMMUN ################################################
