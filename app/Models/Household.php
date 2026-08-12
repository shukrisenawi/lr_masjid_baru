<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Household extends Model
{
    protected $guarded = [];

    public function members(): HasMany
    {
        return $this->hasMany(Member::class);
    }

    public function khairatAccount(): HasOne
    {
        return $this->hasOne(KhairatAccount::class);
    }
}
