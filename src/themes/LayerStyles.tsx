import { LayerSpecification } from "mapbox-gl";

const getLayerStyles = (theme: any):LayerSpecification[] => [
	{
		id: 'red-fill',
		type: 'fill',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'red'], ['==', ['geometry-type'], 'Polygon']],
		paint: {
			'fill-color': theme.palette.features.erase,
			'fill-opacity': 0.3
		}
	},
	{
		id: 'red-outline',
		type: 'line',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'red'], ['==', ['geometry-type'], 'Polygon']],
		paint: {
			'line-color': theme.palette.features.erase,
			'line-width': 2
		}
	},
	{
		id: 'red-line',
		type: 'line',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'red'], ['==', ['geometry-type'], 'LineString']],
		paint: {
			'line-color': theme.palette.features.erase,
			'line-width': 2
		}
	},
	{
		id: 'red-point',
		type: 'circle',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'red'], ['==', ['geometry-type'], 'Point']],
		paint: {
			'circle-color': theme.palette.error.secondary,
			'circle-radius': 3,
			'circle-stroke-width': 2,
			'circle-stroke-color': theme.palette.features.erase,
		}
	},
	{
		id: 'orange-fill',
		type: 'fill',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'orange'], ['==', ['geometry-type'], 'Polygon']],
		paint: {
			'fill-color': theme.palette.features.clip,
			'fill-opacity': 0.3
		}
	},
	{
		id: 'orange-outline',
		type: 'line',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'orange'], ['==', ['geometry-type'], 'Polygon']],
		paint: {
			'line-color': theme.palette.features.clip,
			'line-width': 2
		}
	},
	{
		id: 'orange-line',
		type: 'line',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'orange'], ['==', ['geometry-type'], 'LineString']],
		paint: {
			'line-color': theme.palette.features.clip,
			'line-width': 2
		}
	},
	{
		id: 'orange-point',
		type: 'circle',
		source: 'combined-features',
		filter: ['all', ['==', ['get', 'style'], 'orange'], ['==', ['geometry-type'], 'Point']],
		paint: {
			'circle-color': "#eda774",
			'circle-radius': 3,
			'circle-stroke-width': 2,
			'circle-stroke-color': theme.palette.features.clip,
		}
	}
];

export {getLayerStyles};