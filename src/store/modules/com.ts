
export type ComState = {
  lang: string,
}

const state: ComState = {
  // 国际化
  lang: "",
}

const com = {

  namespaced: true,

  state,

  mutations: {

    setLang (state: ComState, lang:string) {
      state.lang = lang
    },
  }

}

export default com