define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  const capaInicialView = ComponentView.extend({
    postRender: function() {
      this.setReadyStatus();
      this.setupInviewCompletion();
      this.resizeBlockWidth();
    },

    resizeBlockWidth: function(){
      this.$el[0].parentNode.parentNode.style.maxWidth = '100% !important';
      this.$el[0].parentNode.parentNode.classList.add('widthFullMargin');
    }
  });

  const capaInicialModel = ComponentModel.extend({
    // Implement your component model
  });

  return Adapt.register('capaInicial', {
    model: capaInicialModel,
    view: capaInicialView
  });

});
