from math import floor

heap = []
legth = int(input("Size of heap: "))

while True:

    next = int(input("Next eleemnt: "))
    heap.append(next)

    index = len(heap)
    while True:
        if(index == 1):
            break
        compare_index = floor(index / 2)
        print(index, compare_index)
        if(heap[index - 1] > heap[compare_index - 1]):
            aux = heap[index - 1]
            heap[index - 1] = heap[compare_index - 1]
            heap[compare_index - 1] = aux
            index = compare_index
        else:
            break

    if(len(heap) > legth):
        heap.pop(0)

    print(heap)


