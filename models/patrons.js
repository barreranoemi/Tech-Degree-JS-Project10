'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patron = sequelize.define('Patron', {
    //id: DataTypes.INTEGER,
    first_name: {
      type:DataTypes.STRING, 
      validate:{
        notEmpty:{msg: 'First Name field cannot be empty'
      }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Last Name field cannot be empty'
        }
      }
    },
    address: {
      type:DataTypes.STRING,
      validate: {
        notEmpty:{
        msg: 'Address field cannot be empty'
      }
    }
  },
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{msg: 'Correct email format is required: Ex: name@mail.com'},
        notEmpty:{
          msg: 'Email field cannot be empty'
        }
      }
    },
    library_id: {
      type: DataTypes.STRING,
      
      validate: {
        
        notEmpty:{
          msg: 'Library Id  field cannot be empty'
        }
      }
      
    },
    zip_code: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:{msg: 'Zip code must be a 5 digit number'},
        len: 5,
        notEmpty:{
          msg: 'Zip Code field cannot be empty'
        }
      }
    }
  }, 
  
  {
    tableName: 'patrons', 
    timestamps: false,
   
  });
  
  Patron.associate = function(models) {
    Patron.hasMany(models.Loan, { foreignKey: "patron_id" });
  };

  return Patron;
};