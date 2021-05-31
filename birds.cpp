#include <bits/stdc++.h>

using namespace std;
int main()
{
    int N,A[10]={0};
    cin >> N;
    int x;
    for (int i=1; i <= N; i++){
    cin >> x;
    A[x]=A[x]+1;}
    int ans = 1,max=1000001;
    int count1=1,count2=1;
    for (int i=0; i <= 9; i++){
        if (A[i] > ans){ count1 = i;
        ans= A[i];}
        if(A[i]!=0){
        if(A[i]<max) {count2 = i;
        max=A[i];}
        }
    }
    cout << count1 <<" "<<count2;
}