   var contacts = [
       { name: 'Joe Smith', address: '123 Fake Street' },
       { name: 'Joe Smith', address: '123 Fake Street' }
   ]
                
   module.exports = {
       getContact: (index)=>{
           return contacts[index];
       },
       getAllContacts: ()=>{
           return contacts;
       }
   }