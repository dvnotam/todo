git export const arrayAPI = async (src: string) => {
      const response = await fetch(src);
      if (!response.ok) {
        console.log('API не отвечает');
      }

      const result = await response.json()
      return result
}