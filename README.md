# Archi helpful scripts

[Archi](https://www.archimatetool.com/) is the great tool for Archimate modeling.

And with scripting it became much better!

You may read blogpost [jArchi – Scripting for Archi](https://www.archimatetool.com/blog/2018/07/02/jarchi/) about this capability.

> **Warning**: You need install plugin [archi-scripting-plugin](https://github.com/archimatetool/archi-scripting-plugin).

# This repository contains scripts which help me in architecture

## Scripts

### create-legend.ajs
**Purpose:** Automatically generates a legend of all labeled relations on the current view.

**Usage:**
1. Select a Note element on a view
2. Run script: `File → Run Script... → create-legend.ajs`
3. The Note's label will be updated with the legend

**Features:**
- Finds all explicit arrows on the view (excludes visual nesting)
- Collects relations with names
- Sorts lexicographically
- Formats with bullet points (➤) and proper indentation for multi-line descriptions
- Auto-resizes Note height to fit all text
- Detects duplicate names with different descriptions
- Displays summary with counts

---

### dump-selected-object.ajs
**Purpose:** Dumps detailed information about selected element(s) to console.

**Usage:**
1. Select one or more elements in Archi
2. Run script: `File → Run Script... → dump-selected-object.ajs`
3. View detailed dump in console

**Output includes:**
- Element properties and methods
- Concept information
- Full object structure (excluding common methods)

---

### references-check.ajs
**Purpose:** Validates that visual connections on views match underlying model relationships.

**Usage:**
1. Run script: `File → Run Script... → references-check.ajs`
2. Review console output for mismatches

**Detects:**
- Visual connections where source/target don't match the model relationship
- Broken references that may cause model corruption

**Note:** Based on [Archi issue with model saving errors](https://github.com/archimatetool/archi/wiki/Archi-4.7-(or-superior)-can't-save-a-model-or-(if-using-coArchi)-can't-import,-refresh-or-publish-a-model-but-instead-gives-%22Error-in-model%22)

---

### search-all.ajs
**Purpose:** Advanced search and exploration script for finding elements and their relationships.

**Usage:**
1. Edit the script to set your search target (e.g., `var obj = $('.VLAN DB-SRV-P').first()`)
2. Run script: `File → Run Script... → search-all.ajs`
3. Review console output for element details and relationships

**Features:**
- Search by element name or ID
- Find all children in views related to the element
- Find all view references
- Find all relationships (incoming/outgoing)
- Detailed object dumping with properties

---

### VLAN_DB-SRV-P_ref.ajs
**Purpose:** Example reference script showing how to explore a specific element and its relationships.

**Usage:** Run as-is or modify for your specific element.

---

## Libraries (libs/)

Helper libraries used by the scripts above:

### libs/objdump.ajs
**Purpose:** Utility function to dump JavaScript objects in a readable format.

**Function:** `objdump(arr, level, skipRegexp)`
- `arr` - Object to dump
- `level` - Recursion depth (default: 0)
- `skipRegexp` - RegExp pattern for properties to skip

**Used by:** `dump-selected-object.ajs`, `search-all.ajs`

---

### libs/str.js
**Purpose:** Utility function to create short string representation of Archi elements.

**Function:** `str(_obj)`

**Returns:** String in format `[type:id:name]`

**Used by:** `dump-selected-object.ajs`, `search-all.ajs`

---

### libs/Object.eachWithIndex.js
**Purpose:** Adds `eachWithIndex()` method to jArchi collections (similar to Ruby's each_with_index).

**Function:** `Object.prototype.eachWithIndex(func)`

**Callback signature:** `func(element, index, length)`

**Used by:** `dump-selected-object.ajs`, `search-all.ajs`

---

# Developing and contribution

Archi scripting [wiki](https://github.com/archimatetool/archi-scripting-plugin/wiki) will be helpful if you want start writing theirs scripts.
