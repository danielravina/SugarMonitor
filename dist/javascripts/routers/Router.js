define(["backbone","collections/Levels"],function(e){return Router=e.Router.extend({initialize:function(){console.log("router!"),e.history.start()},routes:{top:"index",result:"result"},index:function(){console.log("index")},result:function(){console.log("result")}}),Router.Levels=new Levels,new Router});