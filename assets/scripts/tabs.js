let tabs = document.getElementsByClassName("Tabs-item");
let tabBlocks = document.getElementsByClassName("tabBlock");

for (let i = 0; i < tabs.length; ++i)
{
	tabs[i].onclick = function()
	{
		let attribute = tabs[i].getAttribute("bind");

		SetActiveTab(tabs[i]);
		SetActiveBlock(attribute);
	}
}

function SetActiveTab(element)
{
	for (let i = 0; i < tabs.length; ++i)
	{
		if (tabs[i].classList.contains("Tabs-item--active"))
		{
			tabs[i].classList.remove("Tabs-item--active")
		}
	}

	element.classList.add("Tabs-item--active");
}

function SetActiveBlock(name)
{
	for (let i = 0; i < tabBlocks.length; ++i)
	{
		if (tabBlocks[i].getAttribute("tabBlock") == name)
		{
			tabBlocks[i].classList.add("service--active")
			continue;
		}

		if (tabBlocks[i].classList.contains("service--active"))
		{
			tabBlocks[i].classList.remove("service--active")
		}
	}
}