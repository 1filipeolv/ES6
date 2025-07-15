const sandwich = {
       bread: 'white',
       cheese: 'cheddar',

       prepare: function(){
              return `I want a sandwich with ${this.bread} bread and ${this.cheese}`;
       },

       make: function(){
              window.setTimeout(() => {
                     console.log(this.prepare());
              }, 500);
       }
};
