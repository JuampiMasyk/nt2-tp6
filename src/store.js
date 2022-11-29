import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
        state : {
            pickedColor:'',
            colorCount : 6,
            isHardNav: true,
            colors :[],
            termino : false,
            mensajeChequeo:'',
        },
        actions : {
            setPickedColor({commit},color) {                             
            commit('colorElegido', color)                    
            },
            setColorCount({commit},cant) {                             
                commit('cantColores', cant)                    
            }, 
            setIsHardNav({commit},estado) {                
                commit('tipoJuego', estado)                    
            }, 
            setColours({commit},colores) {  
                commit('cargaColores', colores)                    
            },
            setTermino({commit},estado) {  
                commit('cambiaTermino', estado)                    
            },
            setMensaje({commit},msj) {  
                commit('cambiaMensaje', msj)                    
            }                                
        },
        mutations : {   
            colorElegido(state, color){
                state.pickedColor = color
            },            
            cantColores(state, cant){
                state.colorCount = cant
            },
            tipoJuego(state, estado){
                state.isHardNav = estado
            },    
            cargaColores(state, colores){                
                state.colors = colores
            }, 
            cambiaTermino(state, estado){                
                state.termino = estado
            },     
            cambiaMensaje(state,msj){
                state.mensajeChequeo = msj
            }

        }
    })