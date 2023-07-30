export default function bubble_sort(arr: number[]): void {
  //küçük değere sahip eleman yanındaki eleman büyükse yer değiştirir time complexity O(N^2)
  //example [1,4,2,5,6] => [1,2,4,5,6]
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        const bigValue = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = bigValue 
      }
    }
  }
}