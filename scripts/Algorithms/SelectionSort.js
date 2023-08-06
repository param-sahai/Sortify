function Selection_Sort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(let i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],incorrect);//Color update

        index_min=i;

        for(let j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],comparing);//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],default_color);//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],incorrect);//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],default_color);//Color update
            }
        }
        
        if(index_min!=i)
        {
            let temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],incorrect);//Height update
            div_update(divs[i],div_sizes[i],incorrect);//Height update
            div_update(divs[index_min],div_sizes[index_min],default_color);//Color update
        }
        div_update(divs[i],div_sizes[i],correct);//Color update
    }
    div_update(divs[array_size-1],div_sizes[array_size-1],correct);//Color update

    enable_buttons();
}