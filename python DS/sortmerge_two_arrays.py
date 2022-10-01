i = 0
j = 0

m = len(list1) 
n = len(list2)

list3 = []

if(m==0):

    list3 = list2

elif(n==0):

    list3 = list1

else:
    while i<m and j<n:

        if list1[i] < list2[j]:
            list3.append(list1[i])
            i+=1

        else:
            list3.append(list2[j])
            j+=1
            
    
    while i < m:
        list3.append(list1[i])
        i+=1
    
    while j < n:
        list3.append(list2[j])
        j+=1


for x in range(m+n):
        print(list3[x], end=" ")