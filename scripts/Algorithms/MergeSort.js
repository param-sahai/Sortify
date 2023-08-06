function Merge(){

    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)"

    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_partition(start,end)
{
    if(start < end)
    {
        let mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],comparing);//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}

function merge_sort(start, mid, end)
{
    let p = start, q = mid+1;
    let temp=[], k=0;

    for(let i=start;i<=end;i++){
        if(p>mid)
        {
            temp[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],incorrect);//Color update
        }
        else if(q>end)
        {
            temp[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],incorrect);//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            temp[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],incorrect);//Color update
        }
        else
        {
            temp[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],incorrect);//Color update
        }
    }

    for(let j=0;j<k;j++){
        div_sizes[start++] = temp[j];
        div_update(divs[start-1],div_sizes[start-1],correct);
    }

}